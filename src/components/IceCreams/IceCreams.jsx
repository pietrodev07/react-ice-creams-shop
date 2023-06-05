import { useEffect, useState } from "react";
import SingleIceCream from '../SingleIceCream/SingleIceCream'
import Loading from "../Utils/Loading/Loading";
import Error from "../Utils/Error/Error";
import getData from "../../utils/getData";
import filterData from "../../utils/filterData"
import './IceCreams.css'

const IceCreams = () => {

  const url = 'https://basic-api-kugm.onrender.com/iceCreams';

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [iceCreams, setIceCreams] = useState([]);

  const [selected, setSelected] = useState(0);
  const [iceCreamsSelected, setIceCreamsSelected] = useState(iceCreams);

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    getData(url, setIsLoading, setIsError, setIceCreams, setIceCreamsSelected, setCategories);

  }, []);

  return (

    <main className="main">

      <div className="menu">

        {categories.map((category, index) => {

          const style = `category-btn ${index === selected && 'active'}`;

          const handle = () => filterData(category, index, setSelected, setIceCreamsSelected, iceCreams);

          return (

            <button key={index} className={style} onClick={handle}>{category}</button>

          )

        })}

      </div>

      <div className="container">

        {iceCreams && !isLoading && !isError && iceCreamsSelected.map(iceCream => <SingleIceCream key={iceCream.id} {...iceCream} />)}

        {isLoading && <Loading />}

        {isError && <Error />}

      </div>

    </main>

  )

}

export default IceCreams