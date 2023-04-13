import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Card>
        <h2>Weather</h2>
        <Link href='/test' className='w-1/2 mx-auto'>
          <Button>
            Videre
          </Button>
        </Link>
      </Card>
    </div>
  )
}
