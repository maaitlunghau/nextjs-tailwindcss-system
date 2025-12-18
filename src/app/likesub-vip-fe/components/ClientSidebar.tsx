import { BoxIcon, CalendarHeartIcon, GridIcon, Icon, ListIcon, PackageIcon, Plus, TableIcon, User, UserCircleIcon } from "lucide-react";
import Image from "next/image"

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { 
        name: string;
        path: string;
        new?: boolean 
    }[];
};

const navItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: "Dashboard",
        subItems: [{ name: "Ecommerce", path: "/"}],
    },
    {
        icon: <CalendarHeartIcon />,
        name: "Calendar",
        path: "/calendar",
    },
    {
        icon: <UserCircleIcon />,
        name: "User Profile",
        path: "/profile",
    },

    {
        name: "Forms",
        icon: <ListIcon />,
        subItems: [{ name: "Form Elements", path: "/form-elements" }],
    },
    {
        name: "Tables",
        icon: <TableIcon />,
        subItems: [{ name: "Basic Tables", path: "/basic-tables" }],
    },
    {
        name: "Pages",
        icon: <PackageIcon />,
        subItems: [
        { name: "Blank Page", path: "/blank" },
        { name: "404 Error", path: "/error-404" },
        ],
    },
];

const othersItems: NavItem[] = [
    {
        icon: <User />,
        name: "Charts",
        subItems: [
        { name: "Line Chart", path: "/line-chart" },
        { name: "Bar Chart", path: "/bar-chart" },
        ],
    },
    {
        icon: <BoxIcon />,
        name: "UI Elements",
        subItems: [
        { name: "Alerts", path: "/alerts" },
        { name: "Avatar", path: "/avatars" },
        { name: "Badge", path: "/badge" },
        { name: "Buttons", path: "/buttons" },
        { name: "Images", path: "/images" },
        { name: "Videos", path: "/videos" },
        ],
    },
    {
        icon: <Plus />,
        name: "Authentication",
        subItems: [
        { name: "Sign In", path: "/signin" },
        { name: "Sign Up", path: "/signup" },
        ],
    },
];

function ClientSidebar() {
    const renderMenuItems = (
        navItems: NavItem[],
        menuType: "menu" | "services"
    ) => (
        <ul>
                
        </ul>
    )

    return (
        <aside className="sticky flex flex-col top-0 left-0 w-62.5 px-5 bg-[#0f172a] h-screen transition-all duration-300 ease-in-out z-50">
            {/* Logo */}
            <div className="h-18 py-5 px-6 mb-4">
                <Image
                    className="w-auto h-auto"
                    src="/images/logo.png"
                    alt="tuanori-logo"
                    width={200}
                    height={40}
                    priority
                />
            </div>

            {/* Nav Items */}
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        {/* Menu Item */}
                        <div>
                            <h2 className="mb-4 text-xs uppercase flex text-gray-400 font-medium">
                                MENU
                            </h2>

                            {/* render items */}
                        </div>

                        {/* Services Item */}
                        <div>
                            <h2 className="mb-4 text-xs uppercase flex text-gray-400 font-medium">
                                Dịch vụ
                            </h2>

                            {/* render items */}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default ClientSidebar