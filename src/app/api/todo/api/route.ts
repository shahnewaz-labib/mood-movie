import { NextResponse } from "next/server";

import { fetchUsersTasks } from "./DB_oprations";

export async function GET() {
    // Handle the API request here
    const tasks = await fetchUsersTasks(190041141);

    return NextResponse.json(tasks);
}
