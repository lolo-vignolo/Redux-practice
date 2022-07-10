import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAbilityInfo } from '../actions/abilityActions';
import AbilityPokemons from './components/AbilityPokemons';

const Ability = () => {
  const [ability, setAbility] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbilityInfo(ability));
  }, [ability]);

  const handleAbility = (e) => {
    setAbility(e.target.value);
  };

  return (
    <div style={{ marginTop: '1rem', marginLeft: '2rem', width: '50%' }}>
      <div>
        <label htmlFor="pet-select">Choose a pet: </label>

        <select
          id="pet-select"
          className="size 3 form-select"
          aria-label="Default select example"
          value={ability}
          onChange={handleAbility}
        >
          <option value=" ">--Please choose an option--</option>
          <option value="stench">Stench</option>
          <option value="drizzle">Drizzle</option>
          <option value="speed-boost">Speed Boost</option>
          <option value="sturdy">Sturdy</option>
          <option value="damp">Damp</option>
          <option value="static">Static</option>
        </select>
      </div>
      <div>
        <AbilityPokemons />
      </div>
    </div>
  );
};

export default Ability;
