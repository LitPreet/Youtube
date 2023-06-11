import React,{createContext ,useState, useEffect} from 'react';
import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) =>
{
const [loading,setLoading] = useState(false);
const [searchResults,setSearchResults] = useState(false);
const [selectCategories,setSelectCategories] = useState("New");
const [mobileMenu, setMobileMenu] = useState(false);



// it will be called when user select any option on side panel
useEffect(()=>{
    fetchSelectedCategoryData(selectCategories);
},[selectCategories])

const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
    }).catch((error) => {
        console.error(error);
        setLoading(false);
      });
};


return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResults,setSearchResults,
        selectCategories,setSelectCategories,
        mobileMenu,setMobileMenu
    }}>
        {props.children}
    </Context.Provider>
)

}