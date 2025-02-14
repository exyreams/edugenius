// import React from "react";
// import { ChevronRight } from "lucide-react";
//
// interface BreadcrumbItem {
//   label: string;
//   href: string;
// }
//
// interface BreadcrumbProps {
//   items: BreadcrumbItem[];
// }
//
// const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
//   return (
//     <nav className="flex" aria-label="Breadcrumb">
//       <ol className="mt-4 inline-flex items-center space-x-1 p-2 text-sm md:space-x-2">
//         {items.map((item, index) => (
//           <li key={index} className="inline-flex items-center">
//             {index > 0 && (
//               <ChevronRight className="mx-1 h-4 w-4 text-black/60 dark:text-white/60" />
//             )}
//             <a
//               href={item.href}
//               className={`text-md font-semibold ${
//                 index === items.length - 1
//                   ? "text-black hover:text-black/60 dark:text-white/80 dark:hover:text-white/60"
//                   : "text-black/60 hover:text-black/40 dark:text-white/50 dark:hover:text-white/30"
//               }`}
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };
//
// export default Breadcrumb;

// v2

import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="w-full overflow-hidden" aria-label="Breadcrumb">
      <ol className="mt-4 flex flex-wrap items-center gap-1 p-2 text-sm md:gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-black/60 dark:text-white/60" />
            )}
            <a
              href={item.href}
              className={`text-md font-semibold ${
                index === items.length - 1
                  ? "text-black hover:text-black/60 dark:text-white/80 dark:hover:text-white/60"
                  : "text-black/60 hover:text-black/40 dark:text-white/50 dark:hover:text-white/30"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
