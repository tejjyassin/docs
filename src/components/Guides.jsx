import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/login',
    name: 'Login & Dashboard',
    description: 'Learn how to access the backend of your website',
  },
  {
    href: '/pagination',
    name: 'Posts & Pages',
    description: 'Understand how to add/edit/delete a new listing.',
  },
  {
    href: '/errors',
    name: 'Pages',
    description: 'Read about the page structure of your website.',
  },
  {
    href: '/webhooks',
    name: 'Global Options',
    description: 'Learn how to edit global options in your website.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}