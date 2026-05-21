export default function FirstPost() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <article className="max-w-sm p-8 border rounded-2xl shadow-sm">
        <span className="text-sm text-gray-400 font-medium">8 мая 2026</span>
        <h1 className="text-2xl font-bold mt-2 mb-4">Мой первый пост</h1>
        <p className="text-gray-600">
          Это тестовая запись в моем блоге на Next
        </p>
        <div className="mt-6 pt-6 border-t text-sm text-gray-400">
          Автор: Роман
        </div>
      </article>
    </main>
  );
}
