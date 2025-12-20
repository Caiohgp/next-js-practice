import { Suspense } from "react"
import ProjectList from "./components/projectList"
import ProjectListLoading from "./components/projectListLoading"
import { ErrorBoundary } from "react-error-boundary"
import { Metadata } from "next"
import H1 from "@/components/h1"

export const metadata : Metadata = {
    title:"Projects"
}

export default async function ProjectsPage() {

    return (

        <div>
            <H1>Projects</H1>
            <ErrorBoundary fallback={<div>My Projects are currently unavailable. Please try again later</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>
                </Suspense>
            </ErrorBoundary>
            
        </div>
    )
}