import { routes } from "@/constants/routes"
import Link from "next/link"

export default function AppNav() { 


  return (
    <nav className="w-full flex justify-center mt-10">
        <ul>
          {routes.map((route, index) => (
            <li key={index} className="text-2xl my-3">
              <Link href={route.path}>
                  {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}