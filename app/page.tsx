import Landing from "./components/pages/landing";
import './styles/app.scss';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '900'],
    subsets: ['latin'],
})

export default function Page() {
    return <div className={roboto.className}><Landing /></div>
}