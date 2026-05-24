export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold text-blue-700">Nishitokyo Research App</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          西東京市 不動産管理会社リサーチ
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          東京都西東京市にある不動産管理会社・不動産会社を整理し、企業研究や応募先比較に使うためのWebアプリです。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="font-semibold">検索</h2>
            <p className="mt-2 text-sm text-slate-600">会社名・住所・駅名で探せるようにします。</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="font-semibold">絞り込み</h2>
            <p className="mt-2 text-sm text-slate-600">田無、保谷、ひばりヶ丘、東伏見などで分類します。</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="font-semibold">メモ管理</h2>
            <p className="mt-2 text-sm text-slate-600">応募候補や確認状況を保存できる形にします。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
