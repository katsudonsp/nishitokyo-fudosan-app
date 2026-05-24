import { companies } from '@/lib/companies';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6">
      <section className="mx-auto max-w-5xl">
        <header className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-sm font-semibold text-blue-700">Nishitokyo Research App</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
            西東京市 不動産管理会社リサーチ
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            西東京市周辺の不動産管理会社を一覧で確認できる初期版です。現在は会社情報の表示のみ対応しています。
          </p>
        </header>

        <section className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <article
              key={company.name}
              className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <h2 className="text-lg font-semibold leading-7">{company.name}</h2>
              <dl className="mt-3 space-y-2 text-sm text-slate-700">
                <div>
                  <dt className="font-medium text-slate-500">エリア</dt>
                  <dd>{company.area}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">所在地</dt>
                  <dd>{company.address}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">管理対応状況</dt>
                  <dd>{company.managementStatus}</dd>
                </div>
              </dl>
              <ul className="mt-4 flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
