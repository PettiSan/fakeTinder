import imgBurro from '@assets/avatar_burro.jpg'
import img3 from '@assets/avatar_dua_lipa.png'
import img1 from '@assets/avatar_filipe.png'
import img4 from '@assets/avatar_harvey.png'
import imgInterstelar from '@assets/avatar_interstelar.jpg'
import img2 from '@assets/avatar_naruto.png'
import img7 from '@assets/avatar_silvio_santos.png'
import { CardMessageList } from '@components/cardMessage/cardListMessage/CardMessageList'
import { CardNewMatchList } from '@components/cardNewMatch/cardNewMatchList/CardNewMatchList'
import { SearchIcon } from '@icons/SearchIcon'
import DefaultTemplate from '@template/default/DefaultTemplate'
import clsx from 'clsx'
import styles from './MatchesPage.module.css'

const matchs = [
  {
    name: 'Filipe Petitemberte',
    image: img1,
    lastMessage: 'Partiu Outback nesse feriado?',
    canChat: true,
  },
  {
    name: 'Cooper',
    image: imgInterstelar,
    lastMessage: 'Estou com muita saudade da minha filha...',
    canChat: false,
  },
  {
    name: 'Burro',
    image: imgBurro,
    lastMessage: 'Já fui casado com um dragão, e agora...',
    canChat: false,
  },
  {
    name: 'Naruto',
    image: img2,
    lastMessage: 'Meu filho é um idiota, o que eu faço?',
    canChat: false,
  },
  {
    name: 'Silvio Santos',
    image: img7,
    lastMessage: 'Conhece os produtos Jequiti?',
    canChat: false,
  },
  {
    name: 'Dua Lipa',
    image: img3,
    lastMessage: 'If you dont wanna see me dancing with somebody',
    canChat: false,
  },
  {
    name: 'Harvey Specter',
    image: img4,
    lastMessage: 'i can get u into law school',
    canChat: false,
  },
]

export default function MatchesPage() {
  return (
    <DefaultTemplate pageSeo="Matches">
      <div className={clsx(styles.matchesPage)}>
        {/* SearchBar Section */}
        <div className={clsx(styles.matchesPage_searchBar)}>
          <div className={clsx(styles.matchesPage_searchBar_icon)}>
            <SearchIcon />
          </div>

          <input type="text" placeholder="Buscar 9 Matches" />
        </div>

        {/* New Matches Section */}
        <div
          className={clsx(
            styles.matchesPage_sectionWrapper,
            styles.matchesPage_newMatches
          )}
        >
          <span className={clsx(styles.matchesPage_sectionTitle)}>
            Novos Matches
          </span>

          <CardNewMatchList />
        </div>

        {/* Messages Section */}
        <div
          className={clsx(
            styles.matchesPage_sectionWrapper,
            styles.matchesPage_newMatches
          )}
        >
          <span className={clsx(styles.matchesPage_sectionTitle)}>
            Mensagens
          </span>

          <CardMessageList matchs={matchs} />
        </div>
      </div>
    </DefaultTemplate>
  )
}
