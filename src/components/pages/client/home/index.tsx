import FeedCard from "@/components/ui/feedCard";

export default function HomeViewPage() {
  return (
    <main className="lg:w-4/5 h-screen overflow-y-scroll text-white pb-20">
      <article className="flex flex-col items-center gap-4 w-full lg:order-1 p-6">
        <FeedCard name="Admin TI-1A" time="2 hours ago">
          I{"'"}m so glad to share with you guys some photos from my recent trip
          to New York. This city looks amazing, the buildings, nature, and
          people are all beautiful. I highly recommend visiting this cool place!
          Also, I would love to know what is your favorite place here or what
          you would like to visit? 🗽
        </FeedCard>
      </article>
    </main>
  );
}
