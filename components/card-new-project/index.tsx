import { Card } from '@mui/material'
import styles from './index.module.scss'

type Props = {}

export default function CardNewProject({}: Props) {
  return (
    <div className={`${styles.mainDiv} d-flex j-c-center`}>
        <Card>
            <h2>Create new project</h2>
            <div>
                <input type="text" />
                <button>Create project</button>
            </div>
        </Card>
    </div>
  )
}