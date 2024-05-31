import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="border rounded-md max-w-2xl mx-auto p-4 mt-4">
        <h1 className="text-2xl text-white font-bold mb-4">
          Create a to-do list
        </h1>
        <TodoList />
      </div>
    </>
  );
}