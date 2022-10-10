function Heart(props) {
    return (
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.4493 1.17132C13.9445 2.68332 13.996 5.09132 12.6053 6.66199L6.99998 12.3233L1.39601 6.66199C0.00526547 5.09132 0.0574847 2.67932 1.55201 1.17132C3.04917 -0.338013 5.44398 -0.38868 7.0013 1.01932C8.55399 -0.38668 10.9534 -0.340013 12.4493 1.17132ZM2.48732 2.11465C1.50243 3.10799 1.45286 4.69799 2.36041 5.74865L7.00064 10.436L11.6409 5.74932C12.5491 4.69799 12.4995 3.10999 11.5133 2.11332C10.5304 1.11999 8.94795 1.07199 7.90885 1.98932L5.13133 4.79132L4.19601 3.84865L6.06334 1.96399L6.00914 1.91799C4.96806 1.07465 3.44644 1.14665 2.48732 2.11465Z"
                fill={props.color}
            />
        </svg>
    )
}

export default Heart