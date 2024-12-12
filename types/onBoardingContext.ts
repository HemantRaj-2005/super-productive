import { UseCase } from "@prisma/client";

export enum ActionTypes {
  CHANGE_SITE = "CHANGE_SITE",
  NAME = "NAME",
  SURNAME = "SURNAME",
  PROFILEIMAGE = "PROFILEIMAGE",
  USECASE = "USECASE",
  WORKSPACE = "WORKSPACE",
}

export interface Action {
  type: ActionTypes;
  payload: string | number | UseCase
}

export interface OnboardingFormReducer {
  currentStep: 1 | 2 | 3;
  name?: string | null;
  surname?: string | null;
  profileImage?: string | null;
  useCase: UseCase | null;
  workspaceName: string | null;
}

export interface OnboardingFormContext extends OnboardingFormReducer {
    dispatch: React.Dispatch<Action>;
}
