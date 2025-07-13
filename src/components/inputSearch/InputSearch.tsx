import { useContext, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AppContext } from '../../common/context/AppContextProvider';
import Logo from '../../assets/images/logo.svg';

export const InputSearch = () => {
  const { greating, inputSearchValue, getInputValue } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(inputSearchValue);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = Object.fromEntries(new FormData(event.currentTarget));
    console.log('inputValue >>> ', inputValue);
    // console.log('inputValue 2 >>> ', inputValue.get('inputSearch'));
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if( value.startsWith(' ')) return;
    setInputValue(value);
    if( value.length < 3) {
      setError('El valor debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
    getInputValue(value);
  }

  return (
    <div className={greating ? `inputSearchContainer--active` : `inputSearchContainer`}>
      <img src={Logo} alt="Logo" className='inputSearchContainer--active--imageLogo' />
      <form onSubmit={handleSubmit}>
        <div className="inputSearchContainer--active--inputContainer">
          <input 
            className="inputSearchContainer--active--inputContainer--input" 
            type="text" 
            name="inputSearch"
            value={inputValue} 
            placeholder="Encuentra tu pelicula favorita" 
            onChange={handleChange} 
          />
          {error && <span className="inputSearchContainer--active--inputContainer--error">{error}</span>}
        </div>
      </form>
    </div>
  )
}
