import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from '../routes'

import { Menu } from '../components/Menu'

export const MainPage = () => {
  const routes = useRoutes()
  //   const [page, setPage] = useState('home')

  return (
    <div className="flex justify-center">
      <Router>
        <div className="flex justify-between w-[1440px] px-[30px] py-[30px]">
          <div className="flex justify-center w-[50%]">
            <div className="sticky top-[30px] w-[446px] h-[544px] ">
              <Menu />
            </div>
          </div>
          <div className=" w-[50%]">
            <div className="w-[680px] h-[840px] rounded-[20px]">{routes}</div>
          </div>
        </div>
      </Router>
    </div>
  )
}
