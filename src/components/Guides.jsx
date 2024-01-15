import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/login',
    name: 'Connexion & Tableau de bord',
    description: 'Apprenez comment accéder au site web.',
  },
  {
    href: '/pages',
    name: 'Pages',
    description: 'Comprenez comment gérer les nouvelles pages.',
  },
  {
    href: '/biens',
    name: 'Biens',
    description: 'Découvrez la structure "Biens" de votre site web.',
  },
  {
    href: '/global',
    name: 'Global',
    description:
      'Apprenez à modifier les paramètres globaux de votre site web.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Sections
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
                {`Plus d'informations`}
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
