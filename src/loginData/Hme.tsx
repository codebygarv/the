import React from "react";
import Menu from "../Menu/Menu";
import TasksSection from "../TasksSection/TasksSection";
import ModalCreateTask from "../Utilities/ModalTask";
import { Task } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import { tasksActions } from "../../store/Tasks.store";
import AccountData from "../AccountSection/AccountData";

const Hme: React.FC = () => {
  const modal = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  const closeModalCreateTask = () => {
    dispatch(modalActions.closeModalCreateTask());
  };

  const createNewTaskHandler = (task: Task) => {
    dispatch(tasksActions.addNewTask(task));
  };

  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={closeModalCreateTask}
          nameForm="Add a task"
          onConfirm={createNewTaskHandler}
        />
      )}
      <Menu />
      <TasksSection />
      <AccountData />
    </div>
  );
};

export default Hme;
