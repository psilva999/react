import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const AlertButton = ({ onClose }: Props) => {
  return (

    <div 
      className= 'alert alert-warning alert-dismissible fade show'
      role="alert">
      
      <strong>Forever Young!</strong> Audra Mae

      <button 
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert" 
        aria-label="Close"
        onClick={ onClose }>
        </button>
    </div>

  )
}

export default AlertButton
