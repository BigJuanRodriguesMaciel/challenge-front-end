import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './index.module.scss'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

type Props = {}

export default function CardProject({}: Props) {
  return (
    <div className={`${styles.mainDiv} shadow`}>
        <header>
            <div className="d-flex j-between">
                <input type="text" placeholder="juan maciel"/>
                <div className="actions d-flex j-c-center">
                    <EditIcon color="success"/>
                    <DeleteIcon color="error"/>
                </div>
            </div>
        </header>
        <body>
            <div className={styles.toDO}>
                <h2>To do</h2>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                </FormGroup>
            </div>
            <div className={styles.done}>
                <h2>Done</h2>
                <FormGroup>
                    <FormControlLabel control={<Checkbox disabled/>} label="Label" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox disabled/>} label="Label" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox disabled/>} label="Label" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox disabled/>} label="Label" />
                </FormGroup>
            </div>
        </body>
        <footer className="d-flex j-c-center shadow">
            <input type="text" />
            <button>Adicionar</button>
        </footer>
    </div>
  )
}