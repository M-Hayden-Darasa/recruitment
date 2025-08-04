import { useState } from 'react'

function useModal() {
  const [visible, setVisible] = useState<boolean>(false)

  function toggle() {
    setVisible((prev) => !prev)
  }

  return {
    visible,
    toggle,
  }
}

export default useModal
