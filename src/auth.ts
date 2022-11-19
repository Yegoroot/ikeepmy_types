
// ----------------------------------------------------------
// SIGNUP 
// ----------------------------------------------------------

export interface VerifyNumberBody {
  phone: string
}

export interface SignUpLoginBody {
  password: string
  name: string,
  phone: string
  code: string
  email?: string
}

// ----------------------------------------------------------
// SIGIN
// ----------------------------------------------------------

export interface SignInLoginBody {
  phone: string
  password: string
}


// ----------------------------------------------------------
// Reset PASSWORD
// ----------------------------------------------------------

export interface UpdatePasswordBody {
  phone: string
  password: string
  code: string
}
