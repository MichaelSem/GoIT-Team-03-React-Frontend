import { AddButton, StyledPlusIcon, StyledPlusIconSmall, AddButtonText } from './AddPetButton.styled';

const AddPetButton = () => {

    const handleClick = () => {
        console.log('Sign in to add your own notice.')
    };
    return (
        <AddButton onClick={handleClick}>
            <StyledPlusIcon/>
            <AddButtonText>Add Pet</AddButtonText>
            <StyledPlusIconSmall/>
        </AddButton>
    )
}

export default AddPetButton;
