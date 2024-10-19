import { FeedCardProps } from "@/type";
import { Avatar } from "@chakra-ui/react";
import { BookmarkSimple } from "@phosphor-icons/react";

export default function FeedCard({ name, time, children }: FeedCardProps) {
  return (
    <section className="bg-zinc-900 p-6 rounded-lg shadow mb-6 text-zinc-200 max-w-full md:max-w-lg lg:max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Avatar size="sm" />
          <h2 className="font-bold leading-tight flex items-center gap-1">
            {name}
            <span className="text-zinc-400">•</span>
            <span className="text-sm text-zinc-400 leading-tight">{time}</span>
          </h2>
        </div>
        <button>
          <BookmarkSimple size={24} />
        </button>
      </div>

      <p className="mb-4">{children}</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        <figure className="size-40 lg:size-48 border bg-zinc-700 rounded-lg overflow-hidden" />
        <figure className="size-40 lg:size-48 border bg-zinc-700 rounded-lg overflow-hidden" />
      </div>
    </section>
  );
}
