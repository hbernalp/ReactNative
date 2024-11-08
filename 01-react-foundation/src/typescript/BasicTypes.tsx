

export const BasicTypes = () => {

    const name:string = 'Harrisson';
    const age: number = 45;
    const isActive: boolean = true;
  
    const powers: string[] =  ['React','ReactNative','Angular','Vue','Qwik'];
  
    // powers.push('Next')
    
  
    return (
      <>
        <h3>Tipos básicos</h3>
  
        { name } { age } { isActive ? 'true':'false' } 
        <br />
  
        { powers.join(', ') }
  
  
      </>
    )
  }
