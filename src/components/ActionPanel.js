import React from 'react'
import { ReactionIcon } from './ReactionIcon'
import like from '../assets/like.svg'
import favourite from '../assets/favoutire.svg'
import dislike from '../assets/dislike.svg'
import search from '../assets/search.svg'

export const ActionPanel = () => {
  return (
    <>
      <div className="action-panel flex justify-between">
        <div className="search ">
          <input
            className="gray-text ml-[10px] bg-transparent w-[80%]"
            type="text"
            placeholder="Search for breeds by name"
          />
          <div className="search__button ">
            <img src={search} alt="" />
          </div>
        </div>
        <ReactionIcon img={like} link="like" />
        <ReactionIcon img={favourite} link="favourite" />
        <ReactionIcon img={dislike} link="dislike" />
      </div>
    </>
  )
}
