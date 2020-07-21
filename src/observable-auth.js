componentDidMount() {
    const { setCurrentUser /*collectionsArray*/ } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }

        setCurrentUser(userAuth);
        // --! Seed the firestore databse with initial data  !--
        // addCollectionsAndDocuments(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      },
      (error) => {
        console.log(error);
      }
    );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});