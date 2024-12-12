import ExpandingScrollGallery from './components/ExpandingScrollGallery'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-6xl animate-scroll">
        <ExpandingScrollGallery />
      </div>
    </main>
  )
}
