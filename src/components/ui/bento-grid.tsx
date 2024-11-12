import { cn } from "@/lib/utils"

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto ", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-slate-100 dark:bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
    {children}
    </div>
  )
}
