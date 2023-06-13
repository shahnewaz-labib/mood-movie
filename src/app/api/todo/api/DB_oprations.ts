import { prisma } from "~/server/db";

export async function fetchUsersTasks(userId: number) {
    try {
        const tasks = await prisma.task.findMany({
            where: { userId: userId },
        });
        if (tasks) {
            // const tasks = user.tasks;
            return tasks;
        } else {
            console.log("User not found.");
        }
    } catch (error) {
        console.error("Error fetching user tasks:", error);
    }
    return [];
}
