import { useState } from 'react';
import { Input } from 'shared/components/Common'

import { gfSearch } from 'goldfish'

import SearchIcon from 'react-icons/lib/fa/search'

import './style/search.sass'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const handleOpen = () => setOpen(!open)
  const handleChange = (value) => setValue(value)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <SearchIcon onClick={handleOpen} />

      {open &&
        <div className="search-field">
          <Input
            value={value}
            onChange={handleChange}
            placeholder={gfSearch.placeholder}
            heroRight={{
              text: gfSearch.go,
              button: true,
            }}
          />
        </div>
      }
    </form>
  );
}