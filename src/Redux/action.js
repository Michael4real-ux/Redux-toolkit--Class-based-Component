import * as actions from './actionType'
export const increment = ()=>({
    type:actions.INCREMENT
})

export const decrement = ()=>({
    type:actions.DECREMENT
})

export const increaseby5 =(amount)=>({
    type:actions.INCREASEBY5,
    payload:amount
}) 

export const toggle = ()=>({
    type:actions.TOGGLE
})