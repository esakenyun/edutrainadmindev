import { usePathname } from "next/navigation";
import Link from "next/link";
export const SidebarItem = ({ href, text, icon: Icon, onItemClick }) => {
  const pathname = usePathname();
  const activeRoutes = ["/dashboard/webinar", "/dashboard/workshop", "/dashboard/training"];

  return (
    <Link href={href}>
      <div
        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
          pathname === href || (activeRoutes.includes(href) && pathname.startsWith(href))
            ? "bg-secondary-activeblue font-bold rounded-md text-primary-white"
            : "text-gray-400 hover:bg-secondary-activeblue hover:rounded-md hover:text-primary-white"
        }`}
        onClick={onItemClick}>
        <div className="mr-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export const DropdownItemSidebar = ({ href, text, icon: Icon }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={`flex items-center pl-6 py-3 mb-3 text-gray-400 rounded text-center cursor-pointer transition-colors ${
          pathname == href ? "text-secondary-activeblue font-bold rounded-md bg-secondary-light" : "hover:bg-secondary-light hover:text-secondary-activeblue rounded-md"
        }`}>
        <div className="mr-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};
