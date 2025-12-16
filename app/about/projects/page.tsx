import { Suspense } from "react"
import ProjectList from "./components/projectList"
import ProjectListLoading from "./components/projectListLoading"

export default async function ProjectsPage() {

    return (

        <div>
            <h1 className="mb-8 text-4xl">Projects</h1>
            <Suspense fallback={<ProjectListLoading/>}>
                <ProjectList/>
            </Suspense>
        </div>
    )
}