import { useContext } from 'react'
import { AppContext } from '../../common/context/AppContextProvider';
import Logo from '../../assets/images/logo.svg';

export const InputSearch = () => {
  const { greating, inputSearchValue, getInputValue } = useContext(AppContext);

  return (
    <div className={greating ? `inputSearchContainer--active` : `inputSearchContainer`}>
      <img src={Logo} alt="Logo" className='inputSearchContainer--active--imageLogo' />
      <input className="inputSearchContainer--active--input" type="text" value={inputSearchValue} placeholder="Encuentra tu pelicula favorita" onChange={e => getInputValue(e.target.value)} />
    </div>
  )
}
