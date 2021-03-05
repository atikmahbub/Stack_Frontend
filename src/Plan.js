import React from 'react'

function Plan() {
    return (
        <>
            <div class="promos">  
                <div class="promo first">
                    <h4>Basic</h4>
                    <ul class="features">
                        <li class="brief">Basic membership</li>
                        <li class="price">$69</li>
                        <li>Some great feature</li>
                        <li>Another super feature</li>
                        <li>And more...</li>
                        <li class="buy"><button>Sign up</button></li>   
                    </ul>
                </div>
                <div class="promo second">
                    <h4>Plus</h4>
                    <ul class="features">
                        <li class="brief">Plus membership</li>
                        <li class="price">$79</li>
                        <li>Some great feature</li>
                        <li>Another super feature</li>
                        <li>And more...</li> 
                        <li class="buy"><button>Sign up</button></li>  
                    </ul>
                </div>
                <div class="promo third scale">
                    <h4>Premium</h4>
                    <ul class="features">
                        <li class="brief">This is really a good deal!</li>
                        <li class="price">$89</li>
                        <li>Some great feature</li>
                        <li>Another super feature</li>
                        <li>And more...</li>  
                        <li class="buy"><button>Sign up</button></li> 
                    </ul>
                </div>  
            </div>
            </>
    )
}

export default Plan
