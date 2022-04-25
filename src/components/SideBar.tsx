
import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from './Button';

interface SideBarProps {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  setSelectedGenre: (genre: GenreResponseProps) => void;
  genres?: GenreResponseProps[];
}

export function SideBar(props: SideBarProps) {
    
    function handleClickButton(id: number) {
      props.setSelectedGenreId(id);
    }

    return (
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {props.genres?.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    );
}