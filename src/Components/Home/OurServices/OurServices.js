import React from 'react'
import style from './OurServices.module.css'

function OurServices() {
    return (
        <div>
            <div class={style.containered}>
                <input type="radio" name="slider" className={style.Iitem-1} id="item-1" checked />
                <input type="radio" name="slider" className={style.Iitem-2} id="item-2" />
                <input type="radio" name="slider" className={style.Iitem-3} id="item-3" />
                <div class={style.cards}>
                    <label class={style.card} for="item-1" id="song-1">
                        <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
                    </label>
                    <label class={style.card} for="item-2" id="song-2">
                        <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
                    </label>
                    <label class={style.card} for="item-3" id="song-3">
                        <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default OurServices
