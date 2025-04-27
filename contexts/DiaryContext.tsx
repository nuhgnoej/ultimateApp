import { createContext, ReactNode, useContext, useReducer } from "react";

type Diary = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type Action =
  | { type: "ADD"; payload: Diary }
  | { type: "REMOVE"; payload: { id: number } };

type State = Diary[];

const initialState: State = [];

function diaryReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "REMOVE":
      return state.filter((diary) => diary.id !== action.payload.id);
    default:
      return state;
  }
}

const DiaryContext = createContext<{
  state: State;
  addDiary: (title: string, content: string) => void;
  removeDiary: (id: number) => void;
} | null>(null);

export function DiaryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(diaryReducer, initialState);

  const addDiary = (title: string, content: string) => {
    const newDiary: Diary = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };
    dispatch({ type: "ADD", payload: newDiary });
  };

  const removeDiary = (id: number) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  return (
    <DiaryContext.Provider value={{ state, addDiary, removeDiary }}>
      {children}
    </DiaryContext.Provider>
  );
}

export function useDiary() {
  const context = useContext(DiaryContext);
  if (!context) {
    throw new Error("useDiary는 DiaryProvider 안에서 사용해야 합니다.");
  }
  return context;
}
