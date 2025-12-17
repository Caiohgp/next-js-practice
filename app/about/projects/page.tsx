import { Suspense } from "react"
import ProjectList from "./components/projectList"
import ProjectListLoading from "./components/projectListLoading"
import { ErrorBoundary } from "react-error-boundary"
import { Metadata } from "next"

export const metadata : Metadata = {
    title:"Projects"
}

export default async function ProjectsPage() {

    return (

        <div>
            <h1 className="mb-8 text-4xl">Projects</h1>
            <ErrorBoundary fallback={<div>My Projects are currently unavailable. Please try again later</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>
                </Suspense>
            </ErrorBoundary>
            
        </div>
    )
}