export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          オクモト看板
        </h1>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.969875465032!2d135.7339843154994!3d34.503647980485475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60012d744f8ebc9f%3A0x901a818615e5c497!2z44Kq44Kv44Oi44OI55yL5p2_!5e0!3m2!1sen!2sjp!4v1667054286705!5m2!1sen!2sjp" width="600" height="450" style={{ border: '0' }} allow="fullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </div>
  )
}