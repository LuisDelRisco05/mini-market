import { IoShieldCheckmark } from "react-icons/io5";



export const Payment = (props) => {
    const {
      publicKey,
      currency,
      amountInCents,
      reference,
      signatureIntegrity,
    } = props;
  
    return (
      <form 
        action="https://checkout.wompi.co/p/" 
        method="GET" 
        target="_blank"
      >
        <input type="hidden" name="public-key" value={publicKey} />
        <input type="hidden" name="currency" value={ currency } />
        <input type="hidden" name="amount-in-cents" value={ amountInCents } />
        <input type="hidden" name="reference" value={reference} />
        <input type="hidden" name="signature:integrity" value={signatureIntegrity}/>
    
        <button 
        type="submit"
        className="payment"
        ><IoShieldCheckmark 
          size={18}
        /> 
        Paga con Wompi</button>
      </form>
    );
};
