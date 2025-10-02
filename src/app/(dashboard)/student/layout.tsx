import React from 'react'
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {StudentSidebar} from "@/app/(dashboard)/student/components/StudentSidebar";
import DashboardTopbar from "@/app/(dashboard)/components/DashboardTopbar";

const StudentLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <SidebarProvider style={
            {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
        }>
            <StudentSidebar variant="inset"/>
            <SidebarInset>
                <DashboardTopbar/>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
export default StudentLayout
