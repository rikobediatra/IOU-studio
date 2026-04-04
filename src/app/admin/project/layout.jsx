import Sidebar from "@/components/layouts/Sidebar";
export default function projectLayout({ children }) {
  return (
    <main
      id="dashboard"
      className="bg-[#F5F5F5]"
    >
      <Sidebar> 
        {children}
      </Sidebar>
    </main>
  );
}