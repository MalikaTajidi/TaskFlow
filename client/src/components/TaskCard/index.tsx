import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
    task: Task;
};

const TaskCard = ({ task }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:text-gray-200">
            {task.attachments && task.attachments.length > 0 && (
                <div className="mb-4">
                    <strong className="block mb-2 text-gray-700 dark:text-gray-300">Attachments:</strong>
                    <div className="flex flex-wrap">
                        <Image
                            src={`/${task.attachments[0].fileURL}`}
                            alt={task.attachments[0].fileName}
                            width={400}
                            height={200}
                            className="rounded-md"
                        />
                    </div>
                </div>
            )}
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400"><strong>ID:</strong> {task.id}</p>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {task.title}
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{task.description || "No description provided"}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Tags:</strong> {task.tags || "No tags"}</p>
            <p><strong>Start Date:</strong> {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}</p>
            <p><strong>Due Date:</strong> {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}</p>
            <p><strong>Author:</strong> {task.author ? task.author.username : "Unknown"}</p>
            <p><strong>Assignee:</strong> {task.assignee ? task.assignee.username : "Unassigned"}</p>
        </div>
    );
};

export default TaskCard;
