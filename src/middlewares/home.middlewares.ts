import { checkSchema } from 'express-validator'
import { USER_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

export const createJobValidator = validate(
  checkSchema(
    {
      position: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_POSITION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_POSITION_MUST_BE_A_STRING
        },
        trim: true
      },
      company: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_COMPANY_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_COMPANY_MUST_BE_A_STRING
        },
        trim: true
      },
      jobLocation: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_LOCATION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_LOCATION_MUST_BE_A_STRING
        },
        trim: true
      },
      status: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_STATUS_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_STATUS_MUST_BE_A_STRING
        },
        trim: true
      },
      jobType: {
        notEmpty: {
          errorMessage: USER_MESSAGES.JOB_TYPE_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.JOB_TYPE_MUST_BE_A_STRING
        },
        trim: true
      }
    },
    ['body']
  )
)

export const updateProfileValidator = validate(
  checkSchema(
    {
      fullName: {
        notEmpty: {
          errorMessage: USER_MESSAGES.FULLNAME_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.FULLNAME_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 30
          },
          errorMessage: USER_MESSAGES.FULLNAME_LENGTH_MUST_BE_FROM_1_TO_30
        }
      },
      location: {
        notEmpty: {
          errorMessage: USER_MESSAGES.LOCATION_IS_REQUIRED
        },
        isString: {
          errorMessage: USER_MESSAGES.LOCATION_MUST_BE_A_STRING
        },
        trim: true,
        isLength: {
          options: {
            min: 1,
            max: 30
          },
          errorMessage: USER_MESSAGES.LOCATION_LENGTH_MUST_BE_FROM_1_TO_30
        }
      }
    },
    ['body']
  )
)
