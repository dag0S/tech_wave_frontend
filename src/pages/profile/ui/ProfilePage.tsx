import { FC, FormEvent, useCallback, useEffect } from "react";

import styles from "./ProfilePage.module.scss";
import {
  Avatar,
  Button,
  ButtonTheme,
  Card,
  Container,
  Input,
} from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import {
  setAvatar,
  setEmail,
  setIsEdit,
  setName,
  useEditProfileMutation,
} from "@/features/editProfile";

const ProfilePage: FC = () => {
  const user = useAppSelector((state) => state.userSlice);
  const profile = useAppSelector((state) => state.profileSlice);
  const [updateUserProfile] = useEditProfileMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.avatar && user.email && user.name) {
      dispatch(setAvatar(user.avatar));
      dispatch(setName(user.name));
      dispatch(setEmail(user.email));
    }
  }, [dispatch, user]);

  const handlerToggleIsEdit = useCallback(() => {
    dispatch(setIsEdit());
  }, [dispatch]);

  const handlerChangeEmail = useCallback(
    (value: string) => {
      dispatch(setEmail(value));
    },
    [dispatch]
  );

  const handlerChangeName = useCallback(
    (value: string) => {
      dispatch(setName(value));
    },
    [dispatch]
  );

  const handlerChangeAvatar = useCallback(
    (value: string) => {
      dispatch(setAvatar(value));
    },
    [dispatch]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (profile.avatar && profile.email && profile.name) {
      await updateUserProfile({
        id: user.id,
        role: user.role,
        password: user.password,
        avatar: profile.avatar,
        email: profile.email,
        name: profile.name,
      });
    }

    handlerToggleIsEdit();
  };

  const handlerCancelEdit = useCallback(() => {
    if (user.name && user.avatar && user.email) {
      dispatch(setName(user.name));
      dispatch(setEmail(user.email));
      dispatch(setAvatar(user.avatar));
    }
    handlerToggleIsEdit();
  }, [dispatch, user, handlerToggleIsEdit]);

  return (
    <div className={styles["profile-page"]}>
      <Container>
        <Card>
          <div className={styles["user-info"]}>
            <Avatar
              className={styles["avatar"]}
              size={130}
              src={profile.avatar}
            />
            <form
              className={styles["info-inputs"]}
              id="form-edit-profile"
              onSubmit={handleSubmit}
            >
              <Input
                theme="clear"
                label="Имя:"
                value={profile.name}
                onChange={handlerChangeName}
                disabled={!profile.isEdit}
              />
              <Input
                theme="clear"
                label="Почта:"
                value={profile.email}
                onChange={handlerChangeEmail}
                disabled={!profile.isEdit}
              />
              <Input
                theme="clear"
                label="Аватар (URL)"
                value={profile.avatar}
                onChange={handlerChangeAvatar}
                disabled={!profile.isEdit}
              />
            </form>
          </div>
          <div className={styles["profile-btns"]}>
            {profile.isEdit ? (
              <div className={styles["btns-row"]}>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  color="green"
                  type="submit"
                  form="form-edit-profile"
                >
                  Сохранить
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  color="grey"
                  onClick={handlerCancelEdit}
                >
                  Отмена
                </Button>
              </div>
            ) : (
              <Button onClick={handlerToggleIsEdit}>
                <img src="/svg/edit.svg" alt="edit profile" />
                Редактировать
              </Button>
            )}
            <Button theme={ButtonTheme.RED}>
              <img src="/svg/trash-white.svg" alt="trash icon" /> Удалить
              аккаунт
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ProfilePage;
